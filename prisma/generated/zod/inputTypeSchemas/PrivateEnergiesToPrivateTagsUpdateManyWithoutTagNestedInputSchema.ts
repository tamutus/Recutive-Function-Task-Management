import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToPrivateTagsCreateWithoutTagInputSchema } from './PrivateEnergiesToPrivateTagsCreateWithoutTagInputSchema';
import { PrivateEnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema } from './PrivateEnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema';
import { PrivateEnergiesToPrivateTagsCreateOrConnectWithoutTagInputSchema } from './PrivateEnergiesToPrivateTagsCreateOrConnectWithoutTagInputSchema';
import { PrivateEnergiesToPrivateTagsUpsertWithWhereUniqueWithoutTagInputSchema } from './PrivateEnergiesToPrivateTagsUpsertWithWhereUniqueWithoutTagInputSchema';
import { PrivateEnergiesToPrivateTagsCreateManyTagInputEnvelopeSchema } from './PrivateEnergiesToPrivateTagsCreateManyTagInputEnvelopeSchema';
import { PrivateEnergiesToPrivateTagsWhereUniqueInputSchema } from './PrivateEnergiesToPrivateTagsWhereUniqueInputSchema';
import { PrivateEnergiesToPrivateTagsUpdateWithWhereUniqueWithoutTagInputSchema } from './PrivateEnergiesToPrivateTagsUpdateWithWhereUniqueWithoutTagInputSchema';
import { PrivateEnergiesToPrivateTagsUpdateManyWithWhereWithoutTagInputSchema } from './PrivateEnergiesToPrivateTagsUpdateManyWithWhereWithoutTagInputSchema';
import { PrivateEnergiesToPrivateTagsScalarWhereInputSchema } from './PrivateEnergiesToPrivateTagsScalarWhereInputSchema';

export const PrivateEnergiesToPrivateTagsUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsCreateWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsCreateWithoutTagInputSchema).array(),z.lazy(() => PrivateEnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsCreateOrConnectWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToPrivateTagsCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToPrivateTagsUpdateManyWithoutTagNestedInputSchema;
