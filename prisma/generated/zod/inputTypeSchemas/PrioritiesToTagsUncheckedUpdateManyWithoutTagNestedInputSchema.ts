import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTagsCreateWithoutTagInputSchema } from './PrioritiesToTagsCreateWithoutTagInputSchema';
import { PrioritiesToTagsUncheckedCreateWithoutTagInputSchema } from './PrioritiesToTagsUncheckedCreateWithoutTagInputSchema';
import { PrioritiesToTagsCreateOrConnectWithoutTagInputSchema } from './PrioritiesToTagsCreateOrConnectWithoutTagInputSchema';
import { PrioritiesToTagsUpsertWithWhereUniqueWithoutTagInputSchema } from './PrioritiesToTagsUpsertWithWhereUniqueWithoutTagInputSchema';
import { PrioritiesToTagsCreateManyTagInputEnvelopeSchema } from './PrioritiesToTagsCreateManyTagInputEnvelopeSchema';
import { PrioritiesToTagsWhereUniqueInputSchema } from './PrioritiesToTagsWhereUniqueInputSchema';
import { PrioritiesToTagsUpdateWithWhereUniqueWithoutTagInputSchema } from './PrioritiesToTagsUpdateWithWhereUniqueWithoutTagInputSchema';
import { PrioritiesToTagsUpdateManyWithWhereWithoutTagInputSchema } from './PrioritiesToTagsUpdateManyWithWhereWithoutTagInputSchema';
import { PrioritiesToTagsScalarWhereInputSchema } from './PrioritiesToTagsScalarWhereInputSchema';

export const PrioritiesToTagsUncheckedUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.PrioritiesToTagsUncheckedUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToTagsCreateWithoutTagInputSchema),z.lazy(() => PrioritiesToTagsCreateWithoutTagInputSchema).array(),z.lazy(() => PrioritiesToTagsUncheckedCreateWithoutTagInputSchema),z.lazy(() => PrioritiesToTagsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToTagsCreateOrConnectWithoutTagInputSchema),z.lazy(() => PrioritiesToTagsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrioritiesToTagsUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => PrioritiesToTagsUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToTagsCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema),z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema),z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema),z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema),z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrioritiesToTagsUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => PrioritiesToTagsUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrioritiesToTagsUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => PrioritiesToTagsUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrioritiesToTagsScalarWhereInputSchema),z.lazy(() => PrioritiesToTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToTagsUncheckedUpdateManyWithoutTagNestedInputSchema;
