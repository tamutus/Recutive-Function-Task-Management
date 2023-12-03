import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToSkillsWhereUniqueInputSchema } from './PrivateEnergiesToSkillsWhereUniqueInputSchema';
import { PrivateEnergiesToSkillsUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToSkillsUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToSkillsUncheckedUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToSkillsUncheckedUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToSkillsCreateWithoutEnergyInputSchema } from './PrivateEnergiesToSkillsCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema';

export const PrivateEnergiesToSkillsUpsertWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsUpsertWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateEnergiesToSkillsUpdateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToSkillsUncheckedUpdateWithoutEnergyInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergiesToSkillsCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToSkillsUpsertWithWhereUniqueWithoutEnergyInputSchema;
