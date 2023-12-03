import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskTemplatesCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskTemplatesCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskTemplatesCreateOrConnectWithoutEnergyInputSchema } from './PrivateEnergiesToTaskTemplatesCreateOrConnectWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskTemplatesCreateManyEnergyInputEnvelopeSchema } from './PrivateEnergiesToTaskTemplatesCreateManyEnergyInputEnvelopeSchema';
import { PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema } from './PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema';

export const PrivateEnergiesToTaskTemplatesCreateNestedManyWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesCreateNestedManyWithoutEnergyInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesCreateWithoutEnergyInputSchema).array(),z.lazy(() => PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToTaskTemplatesCreateManyEnergyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToTaskTemplatesCreateNestedManyWithoutEnergyInputSchema;
