import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillsCreateWithoutPersonInputSchema } from './PersonsToSkillsCreateWithoutPersonInputSchema';
import { PersonsToSkillsUncheckedCreateWithoutPersonInputSchema } from './PersonsToSkillsUncheckedCreateWithoutPersonInputSchema';
import { PersonsToSkillsCreateOrConnectWithoutPersonInputSchema } from './PersonsToSkillsCreateOrConnectWithoutPersonInputSchema';
import { PersonsToSkillsCreateManyPersonInputEnvelopeSchema } from './PersonsToSkillsCreateManyPersonInputEnvelopeSchema';
import { PersonsToSkillsWhereUniqueInputSchema } from './PersonsToSkillsWhereUniqueInputSchema';

export const PersonsToSkillsCreateNestedManyWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToSkillsCreateNestedManyWithoutPersonInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToSkillsCreateWithoutPersonInputSchema),z.lazy(() => PersonsToSkillsCreateWithoutPersonInputSchema).array(),z.lazy(() => PersonsToSkillsUncheckedCreateWithoutPersonInputSchema),z.lazy(() => PersonsToSkillsUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToSkillsCreateOrConnectWithoutPersonInputSchema),z.lazy(() => PersonsToSkillsCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToSkillsCreateManyPersonInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PersonsToSkillsWhereUniqueInputSchema),z.lazy(() => PersonsToSkillsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PersonsToSkillsCreateNestedManyWithoutPersonInputSchema;
