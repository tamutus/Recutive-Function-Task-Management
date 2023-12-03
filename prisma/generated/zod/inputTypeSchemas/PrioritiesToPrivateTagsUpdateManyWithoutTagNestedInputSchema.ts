import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToPrivateTagsCreateWithoutTagInputSchema } from './PrioritiesToPrivateTagsCreateWithoutTagInputSchema';
import { PrioritiesToPrivateTagsUncheckedCreateWithoutTagInputSchema } from './PrioritiesToPrivateTagsUncheckedCreateWithoutTagInputSchema';
import { PrioritiesToPrivateTagsCreateOrConnectWithoutTagInputSchema } from './PrioritiesToPrivateTagsCreateOrConnectWithoutTagInputSchema';
import { PrioritiesToPrivateTagsUpsertWithWhereUniqueWithoutTagInputSchema } from './PrioritiesToPrivateTagsUpsertWithWhereUniqueWithoutTagInputSchema';
import { PrioritiesToPrivateTagsCreateManyTagInputEnvelopeSchema } from './PrioritiesToPrivateTagsCreateManyTagInputEnvelopeSchema';
import { PrioritiesToPrivateTagsWhereUniqueInputSchema } from './PrioritiesToPrivateTagsWhereUniqueInputSchema';
import { PrioritiesToPrivateTagsUpdateWithWhereUniqueWithoutTagInputSchema } from './PrioritiesToPrivateTagsUpdateWithWhereUniqueWithoutTagInputSchema';
import { PrioritiesToPrivateTagsUpdateManyWithWhereWithoutTagInputSchema } from './PrioritiesToPrivateTagsUpdateManyWithWhereWithoutTagInputSchema';
import { PrioritiesToPrivateTagsScalarWhereInputSchema } from './PrioritiesToPrivateTagsScalarWhereInputSchema';

export const PrioritiesToPrivateTagsUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToPrivateTagsCreateWithoutTagInputSchema),z.lazy(() => PrioritiesToPrivateTagsCreateWithoutTagInputSchema).array(),z.lazy(() => PrioritiesToPrivateTagsUncheckedCreateWithoutTagInputSchema),z.lazy(() => PrioritiesToPrivateTagsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToPrivateTagsCreateOrConnectWithoutTagInputSchema),z.lazy(() => PrioritiesToPrivateTagsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrioritiesToPrivateTagsUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => PrioritiesToPrivateTagsUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToPrivateTagsCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrioritiesToPrivateTagsUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => PrioritiesToPrivateTagsUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrioritiesToPrivateTagsUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => PrioritiesToPrivateTagsUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrioritiesToPrivateTagsScalarWhereInputSchema),z.lazy(() => PrioritiesToPrivateTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToPrivateTagsUpdateManyWithoutTagNestedInputSchema;
