import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToSkillsCreateWithoutEnergyInputSchema } from './PrivateEnergiesToSkillsCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToSkillsCreateOrConnectWithoutEnergyInputSchema } from './PrivateEnergiesToSkillsCreateOrConnectWithoutEnergyInputSchema';
import { PrivateEnergiesToSkillsCreateManyEnergyInputEnvelopeSchema } from './PrivateEnergiesToSkillsCreateManyEnergyInputEnvelopeSchema';
import { PrivateEnergiesToSkillsWhereUniqueInputSchema } from './PrivateEnergiesToSkillsWhereUniqueInputSchema';

export const PrivateEnergiesToSkillsUncheckedCreateNestedManyWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsUncheckedCreateNestedManyWithoutEnergyInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToSkillsCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToSkillsCreateWithoutEnergyInputSchema).array(),z.lazy(() => PrivateEnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToSkillsCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToSkillsCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToSkillsCreateManyEnergyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToSkillsUncheckedCreateNestedManyWithoutEnergyInputSchema;
