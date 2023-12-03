import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToSkillsCreateWithoutSkillInputSchema } from './PrivateEnergiesToSkillsCreateWithoutSkillInputSchema';
import { PrivateEnergiesToSkillsUncheckedCreateWithoutSkillInputSchema } from './PrivateEnergiesToSkillsUncheckedCreateWithoutSkillInputSchema';
import { PrivateEnergiesToSkillsCreateOrConnectWithoutSkillInputSchema } from './PrivateEnergiesToSkillsCreateOrConnectWithoutSkillInputSchema';
import { PrivateEnergiesToSkillsCreateManySkillInputEnvelopeSchema } from './PrivateEnergiesToSkillsCreateManySkillInputEnvelopeSchema';
import { PrivateEnergiesToSkillsWhereUniqueInputSchema } from './PrivateEnergiesToSkillsWhereUniqueInputSchema';

export const PrivateEnergiesToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsUncheckedCreateNestedManyWithoutSkillInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToSkillsCreateWithoutSkillInputSchema),z.lazy(() => PrivateEnergiesToSkillsCreateWithoutSkillInputSchema).array(),z.lazy(() => PrivateEnergiesToSkillsUncheckedCreateWithoutSkillInputSchema),z.lazy(() => PrivateEnergiesToSkillsUncheckedCreateWithoutSkillInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToSkillsCreateOrConnectWithoutSkillInputSchema),z.lazy(() => PrivateEnergiesToSkillsCreateOrConnectWithoutSkillInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToSkillsCreateManySkillInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema;
