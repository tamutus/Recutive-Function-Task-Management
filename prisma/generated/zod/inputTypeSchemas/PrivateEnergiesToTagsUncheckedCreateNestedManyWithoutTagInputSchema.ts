import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTagsCreateWithoutTagInputSchema } from './PrivateEnergiesToTagsCreateWithoutTagInputSchema';
import { PrivateEnergiesToTagsUncheckedCreateWithoutTagInputSchema } from './PrivateEnergiesToTagsUncheckedCreateWithoutTagInputSchema';
import { PrivateEnergiesToTagsCreateOrConnectWithoutTagInputSchema } from './PrivateEnergiesToTagsCreateOrConnectWithoutTagInputSchema';
import { PrivateEnergiesToTagsCreateManyTagInputEnvelopeSchema } from './PrivateEnergiesToTagsCreateManyTagInputEnvelopeSchema';
import { PrivateEnergiesToTagsWhereUniqueInputSchema } from './PrivateEnergiesToTagsWhereUniqueInputSchema';

export const PrivateEnergiesToTagsUncheckedCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsUncheckedCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToTagsCreateWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToTagsCreateWithoutTagInputSchema).array(),z.lazy(() => PrivateEnergiesToTagsUncheckedCreateWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToTagsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToTagsCreateOrConnectWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToTagsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToTagsCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToTagsUncheckedCreateNestedManyWithoutTagInputSchema;
