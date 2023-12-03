import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTagsCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTagsCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTagsUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTagsUncheckedCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTagsCreateOrConnectWithoutEnergyInputSchema } from './PrivateEnergiesToTagsCreateOrConnectWithoutEnergyInputSchema';
import { PrivateEnergiesToTagsCreateManyEnergyInputEnvelopeSchema } from './PrivateEnergiesToTagsCreateManyEnergyInputEnvelopeSchema';
import { PrivateEnergiesToTagsWhereUniqueInputSchema } from './PrivateEnergiesToTagsWhereUniqueInputSchema';

export const PrivateEnergiesToTagsUncheckedCreateNestedManyWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsUncheckedCreateNestedManyWithoutEnergyInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToTagsCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTagsCreateWithoutEnergyInputSchema).array(),z.lazy(() => PrivateEnergiesToTagsUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTagsUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToTagsCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTagsCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToTagsCreateManyEnergyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToTagsUncheckedCreateNestedManyWithoutEnergyInputSchema;
