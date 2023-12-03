import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectTemplatesCreateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectTemplatesCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectTemplatesCreateOrConnectWithoutEnergyInputSchema } from './PrivateEnergiesToProjectTemplatesCreateOrConnectWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectTemplatesCreateManyEnergyInputEnvelopeSchema } from './PrivateEnergiesToProjectTemplatesCreateManyEnergyInputEnvelopeSchema';
import { PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema } from './PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema';

export const PrivateEnergiesToProjectTemplatesCreateNestedManyWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesCreateNestedManyWithoutEnergyInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesCreateWithoutEnergyInputSchema).array(),z.lazy(() => PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToProjectTemplatesCreateManyEnergyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToProjectTemplatesCreateNestedManyWithoutEnergyInputSchema;
