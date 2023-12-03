import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutEditedProjectsInputSchema } from './PersonCreateWithoutEditedProjectsInputSchema';
import { PersonUncheckedCreateWithoutEditedProjectsInputSchema } from './PersonUncheckedCreateWithoutEditedProjectsInputSchema';
import { PersonCreateOrConnectWithoutEditedProjectsInputSchema } from './PersonCreateOrConnectWithoutEditedProjectsInputSchema';
import { PersonUpsertWithoutEditedProjectsInputSchema } from './PersonUpsertWithoutEditedProjectsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutEditedProjectsInputSchema } from './PersonUpdateToOneWithWhereWithoutEditedProjectsInputSchema';
import { PersonUpdateWithoutEditedProjectsInputSchema } from './PersonUpdateWithoutEditedProjectsInputSchema';
import { PersonUncheckedUpdateWithoutEditedProjectsInputSchema } from './PersonUncheckedUpdateWithoutEditedProjectsInputSchema';

export const PersonUpdateOneRequiredWithoutEditedProjectsNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutEditedProjectsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutEditedProjectsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutEditedProjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutEditedProjectsInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutEditedProjectsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutEditedProjectsInputSchema),z.lazy(() => PersonUpdateWithoutEditedProjectsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutEditedProjectsInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutEditedProjectsNestedInputSchema;
