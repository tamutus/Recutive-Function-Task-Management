import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToSkillsWhereUniqueInputSchema } from './EnergiesToSkillsWhereUniqueInputSchema';
import { EnergiesToSkillsUpdateWithoutEnergyInputSchema } from './EnergiesToSkillsUpdateWithoutEnergyInputSchema';
import { EnergiesToSkillsUncheckedUpdateWithoutEnergyInputSchema } from './EnergiesToSkillsUncheckedUpdateWithoutEnergyInputSchema';

export const EnergiesToSkillsUpdateWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToSkillsUpdateWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EnergiesToSkillsUpdateWithoutEnergyInputSchema),z.lazy(() => EnergiesToSkillsUncheckedUpdateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToSkillsUpdateWithWhereUniqueWithoutEnergyInputSchema;
