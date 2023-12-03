import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToPrivateTagsCreateWithoutEnergyInputSchema } from './PrivateEnergiesToPrivateTagsCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToPrivateTagsCreateOrConnectWithoutEnergyInputSchema } from './PrivateEnergiesToPrivateTagsCreateOrConnectWithoutEnergyInputSchema';
import { PrivateEnergiesToPrivateTagsCreateManyEnergyInputEnvelopeSchema } from './PrivateEnergiesToPrivateTagsCreateManyEnergyInputEnvelopeSchema';
import { PrivateEnergiesToPrivateTagsWhereUniqueInputSchema } from './PrivateEnergiesToPrivateTagsWhereUniqueInputSchema';

export const PrivateEnergiesToPrivateTagsUncheckedCreateNestedManyWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsUncheckedCreateNestedManyWithoutEnergyInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsCreateWithoutEnergyInputSchema).array(),z.lazy(() => PrivateEnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToPrivateTagsCreateManyEnergyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToPrivateTagsUncheckedCreateNestedManyWithoutEnergyInputSchema;
