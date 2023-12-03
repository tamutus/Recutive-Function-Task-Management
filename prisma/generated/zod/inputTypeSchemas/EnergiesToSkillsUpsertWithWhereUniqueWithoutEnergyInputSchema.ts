import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToSkillsWhereUniqueInputSchema } from './EnergiesToSkillsWhereUniqueInputSchema';
import { EnergiesToSkillsUpdateWithoutEnergyInputSchema } from './EnergiesToSkillsUpdateWithoutEnergyInputSchema';
import { EnergiesToSkillsUncheckedUpdateWithoutEnergyInputSchema } from './EnergiesToSkillsUncheckedUpdateWithoutEnergyInputSchema';
import { EnergiesToSkillsCreateWithoutEnergyInputSchema } from './EnergiesToSkillsCreateWithoutEnergyInputSchema';
import { EnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema';

export const EnergiesToSkillsUpsertWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToSkillsUpsertWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EnergiesToSkillsUpdateWithoutEnergyInputSchema),z.lazy(() => EnergiesToSkillsUncheckedUpdateWithoutEnergyInputSchema) ]),
  create: z.union([ z.lazy(() => EnergiesToSkillsCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToSkillsUpsertWithWhereUniqueWithoutEnergyInputSchema;
