import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTagsCreateWithoutTagInputSchema } from './PrivateEnergiesToTagsCreateWithoutTagInputSchema';
import { PrivateEnergiesToTagsUncheckedCreateWithoutTagInputSchema } from './PrivateEnergiesToTagsUncheckedCreateWithoutTagInputSchema';
import { PrivateEnergiesToTagsCreateOrConnectWithoutTagInputSchema } from './PrivateEnergiesToTagsCreateOrConnectWithoutTagInputSchema';
import { PrivateEnergiesToTagsUpsertWithWhereUniqueWithoutTagInputSchema } from './PrivateEnergiesToTagsUpsertWithWhereUniqueWithoutTagInputSchema';
import { PrivateEnergiesToTagsCreateManyTagInputEnvelopeSchema } from './PrivateEnergiesToTagsCreateManyTagInputEnvelopeSchema';
import { PrivateEnergiesToTagsWhereUniqueInputSchema } from './PrivateEnergiesToTagsWhereUniqueInputSchema';
import { PrivateEnergiesToTagsUpdateWithWhereUniqueWithoutTagInputSchema } from './PrivateEnergiesToTagsUpdateWithWhereUniqueWithoutTagInputSchema';
import { PrivateEnergiesToTagsUpdateManyWithWhereWithoutTagInputSchema } from './PrivateEnergiesToTagsUpdateManyWithWhereWithoutTagInputSchema';
import { PrivateEnergiesToTagsScalarWhereInputSchema } from './PrivateEnergiesToTagsScalarWhereInputSchema';

export const PrivateEnergiesToTagsUncheckedUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsUncheckedUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToTagsCreateWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToTagsCreateWithoutTagInputSchema).array(),z.lazy(() => PrivateEnergiesToTagsUncheckedCreateWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToTagsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToTagsCreateOrConnectWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToTagsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateEnergiesToTagsUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToTagsUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToTagsCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateEnergiesToTagsUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToTagsUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateEnergiesToTagsUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToTagsUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateEnergiesToTagsScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToTagsUncheckedUpdateManyWithoutTagNestedInputSchema;
