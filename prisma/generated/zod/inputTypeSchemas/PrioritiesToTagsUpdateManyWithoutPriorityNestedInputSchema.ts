import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTagsCreateWithoutPriorityInputSchema } from './PrioritiesToTagsCreateWithoutPriorityInputSchema';
import { PrioritiesToTagsUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToTagsUncheckedCreateWithoutPriorityInputSchema';
import { PrioritiesToTagsCreateOrConnectWithoutPriorityInputSchema } from './PrioritiesToTagsCreateOrConnectWithoutPriorityInputSchema';
import { PrioritiesToTagsUpsertWithWhereUniqueWithoutPriorityInputSchema } from './PrioritiesToTagsUpsertWithWhereUniqueWithoutPriorityInputSchema';
import { PrioritiesToTagsCreateManyPriorityInputEnvelopeSchema } from './PrioritiesToTagsCreateManyPriorityInputEnvelopeSchema';
import { PrioritiesToTagsWhereUniqueInputSchema } from './PrioritiesToTagsWhereUniqueInputSchema';
import { PrioritiesToTagsUpdateWithWhereUniqueWithoutPriorityInputSchema } from './PrioritiesToTagsUpdateWithWhereUniqueWithoutPriorityInputSchema';
import { PrioritiesToTagsUpdateManyWithWhereWithoutPriorityInputSchema } from './PrioritiesToTagsUpdateManyWithWhereWithoutPriorityInputSchema';
import { PrioritiesToTagsScalarWhereInputSchema } from './PrioritiesToTagsScalarWhereInputSchema';

export const PrioritiesToTagsUpdateManyWithoutPriorityNestedInputSchema: z.ZodType<Prisma.PrioritiesToTagsUpdateManyWithoutPriorityNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToTagsCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTagsCreateWithoutPriorityInputSchema).array(),z.lazy(() => PrioritiesToTagsUncheckedCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTagsUncheckedCreateWithoutPriorityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToTagsCreateOrConnectWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTagsCreateOrConnectWithoutPriorityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrioritiesToTagsUpsertWithWhereUniqueWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTagsUpsertWithWhereUniqueWithoutPriorityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToTagsCreateManyPriorityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema),z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema),z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema),z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema),z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrioritiesToTagsUpdateWithWhereUniqueWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTagsUpdateWithWhereUniqueWithoutPriorityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrioritiesToTagsUpdateManyWithWhereWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTagsUpdateManyWithWhereWithoutPriorityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrioritiesToTagsScalarWhereInputSchema),z.lazy(() => PrioritiesToTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToTagsUpdateManyWithoutPriorityNestedInputSchema;
