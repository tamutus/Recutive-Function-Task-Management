import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillsCreateWithoutSkillInputSchema } from './PersonsToSkillsCreateWithoutSkillInputSchema';
import { PersonsToSkillsUncheckedCreateWithoutSkillInputSchema } from './PersonsToSkillsUncheckedCreateWithoutSkillInputSchema';
import { PersonsToSkillsCreateOrConnectWithoutSkillInputSchema } from './PersonsToSkillsCreateOrConnectWithoutSkillInputSchema';
import { PersonsToSkillsCreateManySkillInputEnvelopeSchema } from './PersonsToSkillsCreateManySkillInputEnvelopeSchema';
import { PersonsToSkillsWhereUniqueInputSchema } from './PersonsToSkillsWhereUniqueInputSchema';

export const PersonsToSkillsCreateNestedManyWithoutSkillInputSchema: z.ZodType<Prisma.PersonsToSkillsCreateNestedManyWithoutSkillInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToSkillsCreateWithoutSkillInputSchema),z.lazy(() => PersonsToSkillsCreateWithoutSkillInputSchema).array(),z.lazy(() => PersonsToSkillsUncheckedCreateWithoutSkillInputSchema),z.lazy(() => PersonsToSkillsUncheckedCreateWithoutSkillInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToSkillsCreateOrConnectWithoutSkillInputSchema),z.lazy(() => PersonsToSkillsCreateOrConnectWithoutSkillInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToSkillsCreateManySkillInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PersonsToSkillsWhereUniqueInputSchema),z.lazy(() => PersonsToSkillsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PersonsToSkillsCreateNestedManyWithoutSkillInputSchema;
