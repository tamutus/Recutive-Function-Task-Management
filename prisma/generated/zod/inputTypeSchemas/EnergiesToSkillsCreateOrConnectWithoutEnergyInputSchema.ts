import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToSkillsWhereUniqueInputSchema } from './EnergiesToSkillsWhereUniqueInputSchema';
import { EnergiesToSkillsCreateWithoutEnergyInputSchema } from './EnergiesToSkillsCreateWithoutEnergyInputSchema';
import { EnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema';

export const EnergiesToSkillsCreateOrConnectWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToSkillsCreateOrConnectWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergiesToSkillsCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToSkillsCreateOrConnectWithoutEnergyInputSchema;
