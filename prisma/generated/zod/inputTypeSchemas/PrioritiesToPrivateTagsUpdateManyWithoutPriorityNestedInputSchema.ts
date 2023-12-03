import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToPrivateTagsCreateWithoutPriorityInputSchema } from './PrioritiesToPrivateTagsCreateWithoutPriorityInputSchema';
import { PrioritiesToPrivateTagsUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToPrivateTagsUncheckedCreateWithoutPriorityInputSchema';
import { PrioritiesToPrivateTagsCreateOrConnectWithoutPriorityInputSchema } from './PrioritiesToPrivateTagsCreateOrConnectWithoutPriorityInputSchema';
import { PrioritiesToPrivateTagsUpsertWithWhereUniqueWithoutPriorityInputSchema } from './PrioritiesToPrivateTagsUpsertWithWhereUniqueWithoutPriorityInputSchema';
import { PrioritiesToPrivateTagsCreateManyPriorityInputEnvelopeSchema } from './PrioritiesToPrivateTagsCreateManyPriorityInputEnvelopeSchema';
import { PrioritiesToPrivateTagsWhereUniqueInputSchema } from './PrioritiesToPrivateTagsWhereUniqueInputSchema';
import { PrioritiesToPrivateTagsUpdateWithWhereUniqueWithoutPriorityInputSchema } from './PrioritiesToPrivateTagsUpdateWithWhereUniqueWithoutPriorityInputSchema';
import { PrioritiesToPrivateTagsUpdateManyWithWhereWithoutPriorityInputSchema } from './PrioritiesToPrivateTagsUpdateManyWithWhereWithoutPriorityInputSchema';
import { PrioritiesToPrivateTagsScalarWhereInputSchema } from './PrioritiesToPrivateTagsScalarWhereInputSchema';

export const PrioritiesToPrivateTagsUpdateManyWithoutPriorityNestedInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsUpdateManyWithoutPriorityNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToPrivateTagsCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToPrivateTagsCreateWithoutPriorityInputSchema).array(),z.lazy(() => PrioritiesToPrivateTagsUncheckedCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToPrivateTagsUncheckedCreateWithoutPriorityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToPrivateTagsCreateOrConnectWithoutPriorityInputSchema),z.lazy(() => PrioritiesToPrivateTagsCreateOrConnectWithoutPriorityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrioritiesToPrivateTagsUpsertWithWhereUniqueWithoutPriorityInputSchema),z.lazy(() => PrioritiesToPrivateTagsUpsertWithWhereUniqueWithoutPriorityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToPrivateTagsCreateManyPriorityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrioritiesToPrivateTagsUpdateWithWhereUniqueWithoutPriorityInputSchema),z.lazy(() => PrioritiesToPrivateTagsUpdateWithWhereUniqueWithoutPriorityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrioritiesToPrivateTagsUpdateManyWithWhereWithoutPriorityInputSchema),z.lazy(() => PrioritiesToPrivateTagsUpdateManyWithWhereWithoutPriorityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrioritiesToPrivateTagsScalarWhereInputSchema),z.lazy(() => PrioritiesToPrivateTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToPrivateTagsUpdateManyWithoutPriorityNestedInputSchema;
