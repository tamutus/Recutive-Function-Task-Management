import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ProjectTemplateUpdatelinksInputSchema } from './ProjectTemplateUpdatelinksInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { PersonsToProjectTemplatesUncheckedUpdateManyWithoutProjectNestedInputSchema } from './PersonsToProjectTemplatesUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { EnergiesToProjectTemplatesUncheckedUpdateManyWithoutProjectNestedInputSchema } from './EnergiesToProjectTemplatesUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { ProjectTemplatesToTagsUncheckedUpdateManyWithoutProjectNestedInputSchema } from './ProjectTemplatesToTagsUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { PrivateTagsToProjectTemplatesUncheckedUpdateManyWithoutProjectNestedInputSchema } from './PrivateTagsToProjectTemplatesUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { ProjectTemplatesToTaskTemplatesUncheckedUpdateManyWithoutProjectNestedInputSchema } from './ProjectTemplatesToTaskTemplatesUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { ProjectUncheckedUpdateManyWithoutTemplateNestedInputSchema } from './ProjectUncheckedUpdateManyWithoutTemplateNestedInputSchema';

export const ProjectTemplateUncheckedUpdateWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.ProjectTemplateUncheckedUpdateWithoutPrivateEnergiesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  completionRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  links: z.union([ z.lazy(() => ProjectTemplateUpdatelinksInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  collaborators: z.lazy(() => PersonsToProjectTemplatesUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  energies: z.lazy(() => EnergiesToProjectTemplatesUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  tags: z.lazy(() => ProjectTemplatesToTagsUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToProjectTemplatesUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  tasks: z.lazy(() => ProjectTemplatesToTaskTemplatesUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  implementations: z.lazy(() => ProjectUncheckedUpdateManyWithoutTemplateNestedInputSchema).optional()
}).strict();

export default ProjectTemplateUncheckedUpdateWithoutPrivateEnergiesInputSchema;
